//import moment from "moment";


export class AccountForm {
  static async onload(context: Xrm.Events.EventContext): Promise<void> {
    const now = ""; //moment().format();
    context
      .getFormContext()
      .getAttribute("name")
      .addOnChange(() => {
        console.log(`name onchange ${now}`);
      });
  }
}

export async function onsave(): Promise<void> {
  console.debug("onsave");
}