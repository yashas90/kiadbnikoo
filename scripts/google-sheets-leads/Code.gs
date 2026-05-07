/**
 * PropNinja lead webhook → Google Sheet
 *
 * SETUP (one time)
 * 1. Create a new Google Sheet. Copy its ID from the URL:
 *    https://docs.google.com/spreadsheets/d/THIS_IS_THE_SHEET_ID/edit
 * 2. Open https://script.google.com → New project → paste this file → Save.
 * 3. Project Settings → Script properties → Add:
 *    - SPREADSHEET_ID = your sheet ID
 *    - SHEET_NAME = Leads   (optional; default "Leads")
 *    - WEBHOOK_SECRET = long random string (optional; if set, must match .env GOOGLE_SHEETS_WEBHOOK_SECRET)
 * 4. Run setupSheet() once from the editor (select function → Run). Authorize.
 *    Creates the "Leads" tab and header row if missing.
 * 5. Deploy → New deployment → Type: Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 6. Copy the Web app URL → GOOGLE_SHEETS_WEBHOOK_URL in .env.local
 *
 * PAYLOAD (POST JSON from Next.js /api/lead):
 * timestamp, name, phone, email, configuration, consent, source, page
 *
 * CRITICAL: Do not wrap this file in function myFunction() { ... }.
 * doGet and doPost must be top-level (global) functions. Keep only ONE doGet.
 */

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  try {
    const props = PropertiesService.getScriptProperties();
    const spreadsheetId = props.getProperty("SPREADSHEET_ID");
    if (!spreadsheetId) {
      return jsonOut({ ok: false, error: "SPREADSHEET_ID not set in Script properties" });
    }

    const raw = e.postData && e.postData.contents ? e.postData.contents : "{}";
    let data;
    try {
      data = JSON.parse(raw);
    } catch (_e) {
      return jsonOut({ ok: false, error: "Invalid JSON" });
    }

    const expectedSecret = props.getProperty("WEBHOOK_SECRET");
    if (expectedSecret) {
      const got = data._webhookSecret;
      if (got !== expectedSecret) {
        return jsonOut({ ok: false, error: "Unauthorized" });
      }
    }
    if (data._webhookSecret) {
      delete data._webhookSecret;
    }

    const sheetName = props.getProperty("SHEET_NAME") || "Leads";
    const ss = SpreadsheetApp.openById(spreadsheetId);
    let sheet = ss.getSheetByName(sheetName);
    if (!sheet) {
      sheet = ss.insertSheet(sheetName);
      sheet.appendRow([
        "Timestamp",
        "Name",
        "Phone",
        "Email",
        "Configuration",
        "Consent",
        "Source",
        "Page",
      ]);
    }

    const row = [
      data.timestamp || new Date().toISOString(),
      data.name || "",
      data.phone || "",
      data.email || "",
      data.configuration || "",
      data.consent === true ? "yes" : String(data.consent || ""),
      data.source || "",
      data.page || "",
    ];
    sheet.appendRow(row);

    return jsonOut({ ok: true });
  } catch (err) {
    return jsonOut({
      ok: false,
      error: String(err && err.message ? err.message : err),
    });
  } finally {
    lock.releaseLock();
  }
}

function doGet() {
  return ContentService.createTextOutput(
    JSON.stringify({ ok: true, message: "PropNinja leads webhook — use POST" })
  ).setMimeType(ContentService.MimeType.JSON);
}

function jsonOut(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );
}

/**
 * Run once from the Apps Script editor after setting SPREADSHEET_ID (and optional SHEET_NAME).
 */
function setupSheet() {
  const props = PropertiesService.getScriptProperties();
  const spreadsheetId = props.getProperty("SPREADSHEET_ID");
  if (!spreadsheetId) {
    throw new Error("Set SPREADSHEET_ID in Script properties first.");
  }
  const sheetName = props.getProperty("SHEET_NAME") || "Leads";
  const ss = SpreadsheetApp.openById(spreadsheetId);
  let sheet = ss.getSheetByName(sheetName);
  if (!sheet) {
    sheet = ss.insertSheet(sheetName);
  }
  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      "Timestamp",
      "Name",
      "Phone",
      "Email",
      "Configuration",
      "Consent",
      "Source",
      "Page",
    ]);
  }
}
