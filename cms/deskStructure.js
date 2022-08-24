// /deskStructure.js
import S from "@sanity/desk-tool/structure-builder";
import { FiHome, FiSettings, FiStar } from "react-icons/fi";
import { getDocumentNodeWithViews } from "./plugins/views-in-schema/documentNodeWithViews";

export const getDefaultDocumentNode = getDocumentNodeWithViews;
const excludedDocumentTypes = [
  "siteSettings",
  "homePage",
  "exhibitionPage",
  "media.tag",
];

export default () =>
  S.list()
    .title("Content")
    .items([
      S.documentListItem()
        .title("Settings")
        .id("siteSettings")
        .schemaType("siteSettings")
        .icon(FiSettings),
      S.divider(),
      S.documentListItem()
        .title("Home page")
        .id("homePage")
        .schemaType("homePage")
        .icon(FiHome),
      S.documentListItem()
        .title("Inger Munch og Akerselva")
        .id("exhibitionPage")
        .schemaType("exhibitionPage")
        .icon(FiStar),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem) => !excludedDocumentTypes.includes(listItem.getId())
      ),
    ]);
