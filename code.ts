const selectedFrame = figma.currentPage.selection

function hasValidSelection(nodes) {
  return !(!nodes || nodes.length === 0)
}

const densities = [
  {format: "PNG", suffix: "@LDPI", constraint: {type: "SCALE", value: 0.75}},
  {format: "PNG", suffix: "@MDPI", constraint: {type: "SCALE", value: 1}},
  {format: "PNG", suffix: "@HDPI", constraint: {type: "SCALE", value: 1.5}},
  {format: "PNG", suffix: "@XHDPI", constraint: {type: "SCALE", value: 2}},
  {format: "PNG", suffix: "@XXHDPI", constraint: {type: "SCALE", value: 3}},
  {format: "PNG", suffix: "@XXXHDPI", constraint: {type: "SCALE", value: 4}}
]

async function main(nodes): Promise<string> {
  
  if(!hasValidSelection(nodes)) return Promise.resolve('Nothing Selected 🛑')

  for (let node of nodes) {
    node.exportSettings = densities
  }

  return Promise.resolve('✅ Done. Check your Export Settings 👉')
}

main(selectedFrame).then((res) => figma.closePlugin(res))