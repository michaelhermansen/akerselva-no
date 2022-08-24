export default function conditionallyRequired(Rule, fieldName) {
  return Rule.custom((field, context) => {
    if (context.document?.[fieldName] && !field) return "Required";
    return true;
  });
}
