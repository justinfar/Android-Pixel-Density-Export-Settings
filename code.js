var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const selectedFrame = figma.currentPage.selection;
function hasValidSelection(nodes) {
    return !(!nodes || nodes.length === 0);
}
const densities = [
    { format: "PNG", suffix: "@LDPI", constraint: { type: "SCALE", value: 0.75 } },
    { format: "PNG", suffix: "@MDPI", constraint: { type: "SCALE", value: 1 } },
    { format: "PNG", suffix: "@HDPI", constraint: { type: "SCALE", value: 1.5 } },
    { format: "PNG", suffix: "@XHDPI", constraint: { type: "SCALE", value: 2 } },
    { format: "PNG", suffix: "@XXHDPI", constraint: { type: "SCALE", value: 3 } },
    { format: "PNG", suffix: "@XXXHDPI", constraint: { type: "SCALE", value: 4 } }
];
function main(nodes) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!hasValidSelection(nodes))
            return Promise.resolve('Nothing Selected 🛑');
        for (let node of nodes) {
            node.exportSettings = densities;
        }
        return Promise.resolve('✅ Done. Check your Export Settings 👉');
    });
}
main(selectedFrame).then((res) => figma.closePlugin(res));
