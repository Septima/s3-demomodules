import ItemsForAddressProvider from "./src/ItemsForAddressProvider"
import ClassRegistry from "@septima/septima-search/src/js/ClassRegistry"

const demoTypes = new ClassRegistry("s3-demomodules/")
//This is optional
//In large package the types array may be generated from JsDoc
demoTypes.setTypes([{
  ItemsForAddressProvider: {
    description: "Shows some demo details for a Dawa Adress"
  }
}])

demoTypes.addClass(ItemsForAddressProvider, "ItemsForAddressProvider")

export default demoTypes