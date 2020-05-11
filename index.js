import ItemsForAddressProvider from "./src/ItemsForAddressProvider"
import ClassRegistry from "@septima/septima-search/src/js/ClassRegistry"

const demoTypes = new ClassRegistry()

demoTypes.addClass(ItemsForAddressProvider, "s3-demomodules/ItemsForAddressProvider")

export default demoTypes