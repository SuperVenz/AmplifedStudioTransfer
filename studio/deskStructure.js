// /deskStructure.js
import { FcOpenedFolder, FcAudioFile } from "react-icons/fc";
import { IconName } from "react-icons/bs";
import S from "@sanity/desk-tool/structure-builder";

const folder = FcOpenedFolder;
const file = FcAudioFile;
// Algro to find the correct list of refs
//  .filter("_type == $type")
//             .params({ type: "servicePage" })
const query = `*[_type == $type && _id in *[_id == $parentId][0].sites[]._ref]`;
export default () =>
  S.list()
    .title("Editor")
    .items([
      S.listItem()
        .title("Site Settings")
        .icon(folder)
        .child(
          S.list()
            // Sets a title for our new list
            .title("Settings & Themes")
            // Add items to the array
            // Each will pull one of our new singletons
            .items([
              S.listItem()
                .title("Company Info")
                .icon(file)
                .child(
                  S.document()
                    .schemaType("siteInfo")
                    .documentId("siteInfo")
                    .title("Enter your Companys Info and Data")
                ),
              S.listItem()
                .title("Widgets")
                .icon(file)
                .child(
                  S.document()
                    .schemaType("widgets")
                    .documentId("widgets")
                    .title("Edit")
                ),
              S.listItem()
                .title("Header & Footer")
                .icon(file)
                .child(
                  S.document()
                    .schemaType("headerFooter")
                    .documentId("headerFooter")
                    .title("Edit")
                ),
              S.listItem()
                .title("Theme")
                .icon(file)
                .child(
                  S.document()
                    .schemaType("themes")
                    .documentId("themes")
                    .title("Edit")
                ),
            ])
        ),
      S.divider(),
      // Site Pages go here
      S.listItem()
        .title("Site Pages")
        .icon(folder)
        .child(
          S.list()
            .title("Pages")
            // Static Pages
            .items([
              S.listItem()
                .title("Landing Page")
                .icon(file)
                .child(
                  S.document()
                    .schemaType("index")
                    .documentId("index")
                    .title("Edit")
                ),
              S.listItem()
                .title("Gear Page")
                .icon(file)
                .child(
                  S.document()
                    .schemaType("gearPage")
                    .documentId("gearPage")
                    .title("Edit")
                ),
              S.listItem()
                .title("Gallery")
                .icon(file)
                .child(
                  S.document()
                    .schemaType("gallery")
                    .documentId("gallery")
                    .title("Edit")
                ),
              S.listItem()
                .title("About Us")
                .icon(file)
                .child(
                  S.document()
                    .schemaType("about")
                    .documentId("about")
                    .title("Edit")
                ),
              S.listItem()
                .title("Contact Us")
                .icon(file)
                .child(
                  S.document()
                    .schemaType("contact")
                    .documentId("contact")
                    .title("Edit")
                ),
              S.listItem()
                .title("Thank You")
                .icon(file)
                .child(
                  S.document()
                    .schemaType("thankyou")
                    .documentId("thankyou")
                    .title("Edit")
                ),
              // // Services
              S.divider(),
              S.listItem()
                .title("Service Homepage")
                .icon(file)
                .child(
                  S.document()
                    .schemaType("generalServices")
                    .documentId("generalServices")
                    .title("Edit")
                ),
              S.listItem()
                .title("Artist Development")
                .icon(file)
                .child(
                  S.document()
                    .schemaType("artistDevelopment")
                    .documentId("artistDevelopment")
                    .title("Edit")
                ),
              S.listItem()
                .title("Services")
                .icon(folder)
                .child(
                  S.documentList()
                    .schemaType("servicePage")
                    .title("List of Services")
                    .filter("_type == $type")
                    .params({ type: "servicePage" })
                ),
              // Rooms Section
              S.divider(),
              S.listItem()
                .title("Studio Room Homepage")
                .icon(file)
                .child(
                  S.document()
                    .schemaType("rooms")
                    .documentId("rooms")
                    .title("Edit")
                ),
              S.listItem()
                .title("Rooms Posts")
                .icon(folder)
                .child(
                  S.documentList()
                    .schemaType("roomsPosts")
                    .title("Pages")
                    .filter("_type == $type")
                    .params({ type: "roomsPosts" })
                ),
              // Service Articles
              S.divider(),
              S.listItem()
                .title("Team Members")
                .icon(folder)
                .child(
                  S.documentList()
                    .schemaType("profilePage")
                    .title("Pages")
                    .filter("_type == $type")
                    .params({ type: "profilePage" })
                ),

              // Rooms Section
              S.divider(),
              S.listItem()
                .title("Amp Radio")
                .icon(file)
                .child(
                  S.document()
                    .schemaType("generalAmp")
                    .documentId("gemeralAmp")
                    .title("Edit")
                ),
              S.listItem()
                .title("Amp Posts")
                .icon(folder)
                .child(
                  S.documentList()
                    .schemaType("ampPosts")
                    .title("Amp Articles")
                    .filter("_type == $type")
                    .params({ type: "ampPosts" })
                ),
            ])
        ),
    ]);
