import * as utils from "../utils";

export const NAME = "top-level-variables";

export function create(context) {
  return context.parserServices.defineTemplateBodyVisitor(
    {},
    {
      //V - top level variables (properties within data )
      "Property[key.name = data]  ReturnStatement > ObjectExpression"(node) {
        const data = utils.getNamesFromTopLevelObject(node);

        const result = { topLevel: data };
        const json = JSON.stringify(result);
        context.report({ node: node, message: json });
      },
    }
  );
}
