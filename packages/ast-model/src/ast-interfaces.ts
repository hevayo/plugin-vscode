// This is an autogenerated file. Do not edit.
// Run 'BALLERINA_HOME="your/ballerina/home" npm run gen-ast-utils' to generate.
// tslint:disable:ban-types
export interface ASTNode {
  id: string;
  kind: string;
  viewState?: any;
  ws?: any[];
}

export interface Abort extends ASTNode {
  position: any;
  ws: any[];
}

export interface Annotation extends ASTNode {
  abstract: boolean;
  annotationAttachments: any;
  attached: boolean;
  attachmentPoints: string[];
  client: boolean;
  compensate: boolean;
  constant: boolean;
  deprecated: boolean;
  deprecatedAttachments: any;
  final: boolean;
  function_final: boolean;
  interface: boolean;
  lambda: boolean;
  listener: boolean;
  markdownDocumentationAttachment?: MarkdownDocumentation;
  name: Identifier;
  native: boolean;
  noAttachmentPoints?: boolean;
  optional: boolean;
  parallel: boolean;
  position: any;
  private: boolean;
  public: boolean;
  readonly: boolean;
  record: boolean;
  remote: boolean;
  required: boolean;
  resource: boolean;
  service: boolean;
  testable: boolean;
  typeNode: UserDefinedType;
  worker: boolean;
  ws: any[];
}

export interface AnnotationAttachment extends ASTNode {
  annotationName: Identifier;
  expression?: RecordLiteralExpr;
  packageAlias: Identifier;
  position: any;
  ws: any[];
}

export interface ArrayLiteralExpr extends ASTNode {
  expressions: Array<
    | ArrayLiteralExpr
    | BracedTupleExpr
    | FieldBasedAccessExpr
    | Invocation
    | Literal
    | RecordLiteralExpr
    | SimpleVariableRef
  >;
  isExpression?: boolean;
  position: any;
  symbolType: string[];
  ws: any[];
}

export interface ArrayType extends ASTNode {
  dimensionAsString?: string;
  dimensions: number;
  elementType:
    | BuiltInRefType
    | ConstrainedType
    | FunctionType
    | TupleTypeNode
    | UnionTypeNode
    | UserDefinedType
    | ValueType;
  grouped: boolean;
  isRestParam?: boolean;
  nullable: boolean;
  nullableOperatorAvailable?: boolean;
  position?: any;
  sizes: number[];
  symbolType: string[];
  ws?: any[];
}

export interface ArrowExpr extends ASTNode {
  expression:
    | ArrowExpr
    | BinaryExpr
    | BracedTupleExpr
    | ElvisExpr
    | IndexBasedAccessExpr
    | Invocation
    | Lambda
    | Literal
    | SimpleVariableRef
    | StringTemplateLiteral
    | TypeConversionExpr
    | UnaryExpr;
  hasParantheses?: boolean;
  isExpression?: boolean;
  parameters: Variable[];
  position: any;
  symbolType?: string[];
  ws: any[];
}

export interface Assignment extends ASTNode {
  declaredWithVar: boolean;
  expression:
    | ArrayLiteralExpr
    | BinaryExpr
    | BracedTupleExpr
    | CheckExpr
    | ElvisExpr
    | FieldBasedAccessExpr
    | IndexBasedAccessExpr
    | Invocation
    | Lambda
    | Literal
    | RecordLiteralExpr
    | SimpleVariableRef
    | TrapExpr
    | TypeConversionExpr
    | TypeInitExpr
    | UnaryExpr
    | XmlElementLiteral;
  position: any;
  variable: FieldBasedAccessExpr | IndexBasedAccessExpr | SimpleVariableRef;
  ws: any[];
}

export interface BinaryExpr extends ASTNode {
  isExpression?: boolean;
  leftExpression:
    | BinaryExpr
    | BracedTupleExpr
    | CheckExpr
    | FieldBasedAccessExpr
    | IndexBasedAccessExpr
    | Invocation
    | Literal
    | SimpleVariableRef
    | TypeConversionExpr
    | UnaryExpr;
  operatorKind: string;
  position: any;
  rightExpression:
    | BinaryExpr
    | BracedTupleExpr
    | CheckExpr
    | FieldBasedAccessExpr
    | IndexBasedAccessExpr
    | Invocation
    | Literal
    | SimpleVariableRef
    | TypeConversionExpr
    | TypeTestExpr
    | UnaryExpr;
  symbolType?: string[];
  ws: any[];
}

export interface Block extends ASTNode {
  isElseBlock?: boolean;
  position?: any;
  statements: Array<
    | Abort
    | Assignment
    | Break
    | CompoundAssignment
    | Done
    | ExpressionStatement
    | Foreach
    | Forever
    | If
    | Lock
    | Next
    | Panic
    | Return
    | Throw
    | Transaction
    | Try
    | TupleDestructure
    | VariableDef
    | While
    | Xmlns
  >;
  ws?: any[];
}

export interface BracedTupleExpr extends ASTNode {
  expressions: Array<
    | ArrayLiteralExpr
    | BinaryExpr
    | BracedTupleExpr
    | ElvisExpr
    | FieldBasedAccessExpr
    | IndexBasedAccessExpr
    | Invocation
    | Literal
    | RecordLiteralExpr
    | SimpleVariableRef
    | TernaryExpr
    | TypeConversionExpr
    | TypeTestExpr
    | UnaryExpr
  >;
  isExpression?: boolean;
  position: any;
  symbolType?: string[];
  ws: any[];
}

export interface Break extends ASTNode {
  position: any;
  ws: any[];
}

export interface BuiltInRefType extends ASTNode {
  grouped: boolean;
  nullable: boolean;
  position: any;
  symbolType: string[];
  typeKind: string;
  ws: any[];
}

export interface Catch extends ASTNode {
  body: Block;
  parameter: Variable;
  position: any;
  ws: any[];
}

export interface CheckExpr extends ASTNode {
  expression: Invocation | SimpleVariableRef | TypeConversionExpr;
  isExpression?: boolean;
  operatorKind: string;
  position: any;
  symbolType?: string[];
  ws: any[];
}

export interface CompilationUnit extends ASTNode {
  name: string;
  position: any;
  topLevelNodes: Array<
    | Annotation
    | Constant
    | Function
    | Import
    | Service
    | TypeDefinition
    | Variable
    | Xmlns
  >;
  ws: any[];
}

export interface CompoundAssignment extends ASTNode {
  compoundOperator: string;
  expression: BinaryExpr | Literal | SimpleVariableRef;
  operatorKind: string;
  position: any;
  variable: FieldBasedAccessExpr | SimpleVariableRef;
  ws: any[];
}

export interface Constant extends ASTNode {
  abstract: boolean;
  annotationAttachments: any;
  attached: boolean;
  client: boolean;
  compensate: boolean;
  constant: boolean;
  deprecated: boolean;
  deprecatedAttachments: any;
  final: boolean;
  function_final: boolean;
  interface: boolean;
  lambda: boolean;
  listener: boolean;
  markdownDocumentationAttachment?: MarkdownDocumentation;
  native: boolean;
  optional: boolean;
  parallel: boolean;
  position: any;
  private: boolean;
  public: boolean;
  readonly: boolean;
  record: boolean;
  remote: boolean;
  required: boolean;
  resource: boolean;
  service: boolean;
  testable: boolean;
  value: Literal;
  worker: boolean;
  ws: any[];
}

export interface ConstrainedType extends ASTNode {
  constraint:
    | BuiltInRefType
    | ConstrainedType
    | TupleTypeNode
    | UnionTypeNode
    | UserDefinedType
    | ValueType;
  grouped: boolean;
  nullable: boolean;
  nullableOperatorAvailable?: boolean;
  position: any;
  symbolType: string[];
  type: BuiltInRefType;
  ws: any[];
}

export interface Deprecated extends ASTNode {
  deprecatedStart: string;
  documentationText: string;
  position: any;
  ws: any[];
}

export interface DocumentationDescription extends ASTNode {
  position: any;
  text: string;
  ws?: any[];
}

export interface DocumentationParameter extends ASTNode {
  parameterDocumentation?: string;
  parameterDocumentationLines?: string[];
  parameterName?: Identifier;
  position: any;
  returnParameterDocumentation?: string;
  returnParameterDocumentationLines?: string[];
  ws: any[];
}

export interface Done extends ASTNode {
  position: any;
  ws: any[];
}

export interface ElvisExpr extends ASTNode {
  isExpression?: boolean;
  leftExpression:
    | ElvisExpr
    | FieldBasedAccessExpr
    | Invocation
    | SimpleVariableRef;
  position: any;
  rightExpression: BinaryExpr | BracedTupleExpr | Literal | SimpleVariableRef;
  symbolType: string[];
  ws: any[];
}

export interface ErrorConstructor extends ASTNode {
  detailsExpression?: RecordLiteralExpr | SimpleVariableRef;
  isExpression?: boolean;
  position: any;
  reasonExpression:
    | BinaryExpr
    | FieldBasedAccessExpr
    | Literal
    | SimpleVariableRef;
  symbolType?: string[];
  ws: any[];
}

export interface ErrorType extends ASTNode {
  detailsTypeNode?: UserDefinedType;
  grouped: boolean;
  nullable: boolean;
  nullableOperatorAvailable?: boolean;
  position: any;
  reasonTypeNode?: ValueType;
  symbolType?: string[];
  ws: any[];
}

export interface ExpressionStatement extends ASTNode {
  expression: CheckExpr | Invocation | RecordLiteralExpr;
  position: any;
  ws: any[];
}

export interface FieldBasedAccessExpr extends ASTNode {
  errorLifting?: boolean;
  expression:
    | FieldBasedAccessExpr
    | IndexBasedAccessExpr
    | Invocation
    | SimpleVariableRef;
  fieldName: Identifier;
  isExpression?: boolean;
  position: any;
  symbolType?: string[];
  ws: any[];
}

export interface FiniteTypeNode extends ASTNode {
  grouped: boolean;
  nullable: boolean;
  symbolType: string[];
  valueSet: Literal[];
  ws: any[];
}

export interface Foreach extends ASTNode {
  body: Block;
  collection: BinaryExpr | FieldBasedAccessExpr | SimpleVariableRef;
  position: any;
  variables: SimpleVariableRef[];
  ws: any[];
}

export interface Forever extends ASTNode {
  position: any;
  siddhiRuntimeEnabled: boolean;
  streamingQueryStatements: StreamingQuery[];
  ws: any[];
}

export interface Function extends ASTNode {
  VisibleEndpoints?: VisibleEndpoint[];
  abstract: boolean;
  allParams: Array<Variable | VariableDef>;
  annotationAttachments: AnnotationAttachment[];
  attached: boolean;
  body?: Block;
  client: boolean;
  compensate: boolean;
  constant: boolean;
  defaultableParameters: VariableDef[];
  deprecated: boolean;
  deprecatedAttachments: Deprecated[];
  endpointNodes: any;
  final: boolean;
  function_final: boolean;
  hasRestParams?: boolean;
  hasReturns?: boolean;
  interface: boolean;
  isConstructor?: boolean;
  isStreamAction?: boolean;
  lambda: boolean;
  listener: boolean;
  markdownDocumentationAttachment?: MarkdownDocumentation;
  name: Identifier;
  native: boolean;
  noVisibleReceiver?: boolean;
  optional: boolean;
  parallel: boolean;
  parameters: Array<Variable | VariableDef>;
  position: any;
  private: boolean;
  public: boolean;
  readonly: boolean;
  receiver?: Variable;
  record: boolean;
  remote: boolean;
  required: boolean;
  resource: boolean;
  restParameters?: Variable;
  returnTypeAnnotationAttachments: AnnotationAttachment[];
  returnTypeNode:
    | ArrayType
    | BuiltInRefType
    | ConstrainedType
    | ErrorType
    | FunctionType
    | TupleTypeNode
    | UnionTypeNode
    | UserDefinedType
    | ValueType;
  service: boolean;
  testable: boolean;
  worker: boolean;
  workers: any;
  ws: any[];
}

export interface FunctionType extends ASTNode {
  grouped: boolean;
  hasReturn?: boolean;
  nullable: boolean;
  params: Variable[];
  position: any;
  returnKeywordExists: boolean;
  returnTypeNode:
    | ArrayType
    | ErrorType
    | FunctionType
    | TupleTypeNode
    | UnionTypeNode
    | UserDefinedType
    | ValueType;
  symbolType: string[];
  withParantheses?: boolean;
  ws: any[];
}

export interface GroupBy extends ASTNode {
  position: any;
  variables: SimpleVariableRef[];
  ws: any[];
}

export interface Having extends ASTNode {
  expression: BinaryExpr;
  position: any;
  ws: any[];
}

export interface Identifier extends ASTNode {
  literal: boolean;
  position?: any;
  value: string;
  valueWithBar: string;
}

export interface If extends ASTNode {
  body: Block;
  condition: BinaryExpr | BracedTupleExpr | SimpleVariableRef | UnaryExpr;
  elseStatement?: Block | If;
  isElseIfBlock?: boolean;
  ladderParent?: boolean;
  position: any;
  ws: any[];
}

export interface Import extends ASTNode {
  alias: Identifier;
  isInternal?: boolean;
  orgName: Identifier;
  packageName: Identifier[];
  packageVersion: Identifier;
  position: any;
  userDefinedAlias?: boolean;
  ws?: any[];
}

export interface IndexBasedAccessExpr extends ASTNode {
  expression:
    | FieldBasedAccessExpr
    | IndexBasedAccessExpr
    | Invocation
    | SimpleVariableRef;
  index:
    | BinaryExpr
    | FieldBasedAccessExpr
    | IndexBasedAccessExpr
    | Invocation
    | Literal
    | SimpleVariableRef
    | TypeConversionExpr;
  isExpression?: boolean;
  position: any;
  symbolType?: string[];
  ws: any[];
}

export interface IntRangeExpr extends ASTNode {
  isWrappedWithBracket: boolean;
  position: any;
  startExpression: Literal;
  ws: any[];
}

export interface Invocation extends ASTNode {
  actionInvocation: boolean;
  argumentExpressions: Array<
    | ArrayLiteralExpr
    | ArrowExpr
    | BinaryExpr
    | BracedTupleExpr
    | CheckExpr
    | ElvisExpr
    | FieldBasedAccessExpr
    | IndexBasedAccessExpr
    | Invocation
    | Lambda
    | Literal
    | NamedArgsExpr
    | RecordLiteralExpr
    | RestArgsExpr
    | SimpleVariableRef
    | StringTemplateLiteral
    | TernaryExpr
    | TypeConversionExpr
    | UnaryExpr
    | XmlAttributeAccessExpr
    | XmlElementLiteral
  >;
  async: boolean;
  expression?:
    | FieldBasedAccessExpr
    | IndexBasedAccessExpr
    | Invocation
    | SimpleVariableRef
    | TypedescExpression;
  invocationType?: string;
  isExpression?: boolean;
  iterableOperation: boolean;
  name: Identifier;
  packageAlias: Identifier;
  position: any;
  symbolType: any;
  ws: any[];
}

export interface Lambda extends ASTNode {
  functionNode: Function;
  isExpression?: boolean;
  position: any;
  symbolType?: string[];
}

export interface Literal extends ASTNode {
  emptyParantheses?: boolean;
  endTemplateLiteral?: boolean;
  inTemplateLiteral?: boolean;
  isExpression?: boolean;
  lastNodeValue?: boolean;
  originalValue?: string;
  position: any;
  startTemplateLiteral?: boolean;
  symbolType?: string[];
  unescapedValue?: string;
  value: string;
  ws?: any[];
}

export interface Lock extends ASTNode {
  body: Block;
  position: any;
  ws: any[];
}

export interface MarkdownDocumentation extends ASTNode {
  documentation: string;
  documentationLines: DocumentationDescription[];
  parameterDocumentations: string;
  parameters: DocumentationParameter[];
  position: any;
  returnParameter?: DocumentationParameter;
  returnParameterDocumentation?: string;
  ws: any[];
}

export interface NamedArgsExpr extends ASTNode {
  expression: Literal | RecordLiteralExpr | SimpleVariableRef | UnaryExpr;
  name: Identifier;
  position: any;
  symbolType?: string[];
  ws: any[];
}

export interface Next extends ASTNode {
  position: any;
  ws: any[];
}

export interface ObjectType extends ASTNode {
  fields: Variable[];
  functions: Function[];
  grouped: boolean;
  initFunction?: Function;
  nullable: boolean;
  position: any;
  symbolType: string[];
  typeReferences: UserDefinedType[];
  ws?: any[];
}

export interface Panic extends ASTNode {
  expressions: SimpleVariableRef;
  position: any;
  ws: any[];
}

export interface PatternClause extends ASTNode {
  forAllEvents: boolean;
  patternStreamingNode: PatternStreamingInput;
  position: any;
  ws: any[];
}

export interface PatternStreamingEdgeInput extends ASTNode {
  aliasIdentifier: string;
  expression?: IntRangeExpr;
  position: any;
  streamReference: SimpleVariableRef;
  whereClause?: Where;
  ws: any[];
}

export interface PatternStreamingInput extends ASTNode {
  andOnly: boolean;
  andWithNot: boolean;
  commaSeparated: boolean;
  followedBy: boolean;
  forWithNot: boolean;
  orOnly: boolean;
  patternStreamingEdgeInputs: PatternStreamingEdgeInput[];
  patternStreamingInput?: PatternStreamingInput;
  position: any;
  ws?: any[];
}

export interface RecordLiteralExpr extends ASTNode {
  isExpression?: boolean;
  keyValuePairs: RecordLiteralKeyValue[];
  position: any;
  symbolType?: string[];
  ws: any[];
}

export interface RecordLiteralKeyValue extends ASTNode {
  key: Literal | SimpleVariableRef;
  value:
    | ArrayLiteralExpr
    | BinaryExpr
    | BracedTupleExpr
    | IndexBasedAccessExpr
    | Invocation
    | Lambda
    | Literal
    | RecordLiteralExpr
    | SimpleVariableRef
    | TernaryExpr
    | TypeConversionExpr
    | TypedescExpression;
  ws?: any[];
}

export interface RecordType extends ASTNode {
  fields: Variable[];
  grouped: boolean;
  isRestFieldAvailable?: boolean;
  nullable: boolean;
  position: any;
  restFieldType?: UnionTypeNode | ValueType;
  sealed: boolean;
  symbolType: string[];
  typeReferences: UserDefinedType[];
  ws?: any[];
}

export interface RecordVariableRef extends ASTNode {
  position: any;
  recordRefFields: any;
  symbolType: string[];
  ws: any[];
}

export interface RestArgsExpr extends ASTNode {
  expression: Invocation | SimpleVariableRef;
  position: any;
  symbolType?: string[];
  ws: any[];
}

export interface Return extends ASTNode {
  expression:
    | ArrayLiteralExpr
    | ArrowExpr
    | BinaryExpr
    | BracedTupleExpr
    | CheckExpr
    | ElvisExpr
    | ErrorConstructor
    | FieldBasedAccessExpr
    | IndexBasedAccessExpr
    | Invocation
    | Lambda
    | Literal
    | RecordLiteralExpr
    | SimpleVariableRef
    | TernaryExpr
    | TypeConversionExpr
    | UnaryExpr
    | XmlElementLiteral;
  noExpressionAvailable?: boolean;
  position: any;
  ws: any[];
}

export interface SelectClause extends ASTNode {
  groupBy?: GroupBy;
  having?: Having;
  position: any;
  selectAll: boolean;
  selectExpressions: SelectExpression[];
  ws: any[];
}

export interface SelectExpression extends ASTNode {
  expression:
    | FieldBasedAccessExpr
    | Invocation
    | SimpleVariableRef
    | TernaryExpr;
  identifier?: string;
  identifierAvailable?: boolean;
  position: any;
  ws?: any[];
}

export interface Service extends ASTNode {
  annotationAttachments: AnnotationAttachment[];
  bindNotAvailable: boolean;
  boundEndpoints: any;
  deprecatedAttachments: any;
  endpointNodes: any;
  isServiceTypeUnavailable: boolean;
  markdownDocumentationAttachment?: MarkdownDocumentation;
  name: Identifier;
  namespaceDeclarations: any;
  position: any;
  resources: any;
  variables: any;
  ws: any[];
}

export interface SimpleVariableRef extends ASTNode {
  inTemplateLiteral?: boolean;
  isExpression?: boolean;
  packageAlias?: Identifier;
  position: any;
  symbolType?: string[];
  variableName: Identifier;
  ws?: any[];
}

export interface StreamAction extends ASTNode {
  invokableBody: Lambda;
  position: any;
  ws: any[];
}

export interface StreamingInput extends ASTNode {
  beforeStreamingCondition: Where;
  position: any;
  streamReference: SimpleVariableRef;
  windowClause: WindowClause;
  windowTraversedAfterWhere: boolean;
}

export interface StreamingQuery extends ASTNode {
  patternClause?: PatternClause;
  position: any;
  selectClause: SelectClause;
  streamingAction: StreamAction;
  streamingInput?: StreamingInput;
  ws: any[];
}

export interface StringTemplateLiteral extends ASTNode {
  expressions: Array<
    | FieldBasedAccessExpr
    | Invocation
    | Literal
    | SimpleVariableRef
    | TernaryExpr
  >;
  isExpression?: boolean;
  position: any;
  startTemplate: string;
  symbolType: string[];
  ws: any[];
}

export interface Table extends ASTNode {
  dataRows: RecordLiteralExpr[];
  isExpression: boolean;
  position: any;
  symbolType: string[];
  tableColumns: TableColumn[];
  ws: any[];
}

export interface TableColumn extends ASTNode {
  flagSet: string[];
  name: string;
  position: any;
  ws: any[];
}

export interface TernaryExpr extends ASTNode {
  condition:
    | BinaryExpr
    | BracedTupleExpr
    | Literal
    | SimpleVariableRef
    | TypeTestExpr;
  elseExpression:
    | BinaryExpr
    | BracedTupleExpr
    | FieldBasedAccessExpr
    | Invocation
    | Literal
    | SimpleVariableRef
    | TernaryExpr;
  isExpression?: boolean;
  position: any;
  symbolType?: string[];
  thenExpression:
    | BinaryExpr
    | BracedTupleExpr
    | FieldBasedAccessExpr
    | Invocation
    | Literal
    | SimpleVariableRef
    | TernaryExpr;
  ws: any[];
}

export interface Throw extends ASTNode {
  expressions: SimpleVariableRef;
  position: any;
  ws: any[];
}

export interface Transaction extends ASTNode {
  onRetryBody?: Block;
  position: any;
  retryCount?: Literal;
  transactionBody: Block;
  ws: any[];
}

export interface TrapExpr extends ASTNode {
  expression: Invocation;
  isExpression?: boolean;
  position: any;
  symbolType: string[];
  ws: any[];
}

export interface Try extends ASTNode {
  body: Block;
  catchBlocks: Catch[];
  finallyBody?: Block;
  position: any;
  ws: any[];
}

export interface TupleDestructure extends ASTNode {
  declaredWithVar: boolean;
  expression:
    | BracedTupleExpr
    | Invocation
    | Literal
    | RecordLiteralExpr
    | SimpleVariableRef;
  position: any;
  variableRefs: Array<
    FieldBasedAccessExpr | SimpleVariableRef | TupleVariableRef
  >;
  ws: any[];
}

export interface TupleTypeNode extends ASTNode {
  grouped: boolean;
  memberTypeNodes: Array<
    | ArrayType
    | BuiltInRefType
    | ConstrainedType
    | ErrorType
    | TupleTypeNode
    | UnionTypeNode
    | UserDefinedType
    | ValueType
  >;
  nullable: boolean;
  position: any;
  symbolType: string[];
  ws: any[];
}

export interface TupleVariable extends ASTNode {
  abstract: boolean;
  annotationAttachments: any;
  attached: boolean;
  client: boolean;
  compensate: boolean;
  constant: boolean;
  deprecated: boolean;
  deprecatedAttachments: any;
  final: boolean;
  function_final: boolean;
  initialExpression?: BracedTupleExpr | Invocation | SimpleVariableRef;
  interface: boolean;
  lambda: boolean;
  listener: boolean;
  native: boolean;
  optional: boolean;
  parallel: boolean;
  position: any;
  private: boolean;
  public: boolean;
  readonly: boolean;
  record: boolean;
  remote: boolean;
  required: boolean;
  resource: boolean;
  service: boolean;
  symbolType?: string[];
  testable: boolean;
  typeNode?: TupleTypeNode;
  variables: Array<TupleVariable | Variable>;
  worker: boolean;
  ws: any[];
}

export interface TupleVariableRef extends ASTNode {
  expressions: Array<
    FieldBasedAccessExpr | SimpleVariableRef | TupleVariableRef
  >;
  position: any;
  symbolType: string[];
  ws: any[];
}

export interface TypeConversionExpr extends ASTNode {
  expression:
    | BracedTupleExpr
    | FieldBasedAccessExpr
    | IndexBasedAccessExpr
    | Invocation
    | Literal
    | SimpleVariableRef
    | TypeConversionExpr;
  isExpression?: boolean;
  position: any;
  symbolType: string[];
  typeNode:
    | ArrayType
    | BuiltInRefType
    | ConstrainedType
    | FunctionType
    | TupleTypeNode
    | UserDefinedType
    | ValueType;
  ws: any[];
}

export interface TypeDefinition extends ASTNode {
  abstract: boolean;
  annotationAttachments: any;
  attached: boolean;
  client: boolean;
  compensate: boolean;
  constant: boolean;
  deprecated: boolean;
  deprecatedAttachments: any;
  final: boolean;
  function_final: boolean;
  interface: boolean;
  isAbstractKeywordAvailable?: boolean;
  isObjectType?: boolean;
  isRecordKeywordAvailable?: boolean;
  isRecordType?: boolean;
  lambda: boolean;
  listener: boolean;
  markdownDocumentationAttachment?: MarkdownDocumentation;
  name: Identifier;
  native: boolean;
  notVisible?: boolean;
  optional: boolean;
  parallel: boolean;
  position: any;
  private: boolean;
  public: boolean;
  readonly: boolean;
  record: boolean;
  remote: boolean;
  required: boolean;
  resource: boolean;
  service: boolean;
  testable: boolean;
  typeNode:
    | ArrayType
    | ErrorType
    | FiniteTypeNode
    | ObjectType
    | RecordType
    | UnionTypeNode
    | UserDefinedType
    | ValueType;
  worker: boolean;
  ws?: any[];
}

export interface TypeInitExpr extends ASTNode {
  expressions: Array<
    | FieldBasedAccessExpr
    | IndexBasedAccessExpr
    | Invocation
    | Literal
    | NamedArgsExpr
    | RecordLiteralExpr
    | SimpleVariableRef
  >;
  hasParantheses?: boolean;
  isExpression?: boolean;
  noExpressionAvailable?: boolean;
  noTypeAttached?: boolean;
  position: any;
  symbolType: string[];
  type?: UserDefinedType;
  typeName?: Identifier;
  ws: any[];
}

export interface TypeTestExpr extends ASTNode {
  expression: SimpleVariableRef;
  isExpression?: boolean;
  position: any;
  symbolType: string[];
  typeNode:
    | ArrayType
    | BuiltInRefType
    | ConstrainedType
    | ErrorType
    | TupleTypeNode
    | UserDefinedType
    | ValueType;
  ws: any[];
}

export interface TypedescExpression extends ASTNode {
  isExpression?: boolean;
  position: any;
  symbolType: string[];
  typeNode:
    | ArrayType
    | BuiltInRefType
    | ConstrainedType
    | TupleTypeNode
    | UnionTypeNode
    | ValueType;
}

export interface UnaryExpr extends ASTNode {
  expression:
    | BracedTupleExpr
    | FieldBasedAccessExpr
    | IndexBasedAccessExpr
    | Invocation
    | Literal
    | SimpleVariableRef
    | TypeInitExpr
    | UnaryExpr;
  isExpression?: boolean;
  operatorKind: string;
  position: any;
  symbolType?: string[];
  ws: any[];
}

export interface UnionTypeNode extends ASTNode {
  grouped: boolean;
  memberTypeNodes: Array<
    | ArrayType
    | BuiltInRefType
    | ConstrainedType
    | ErrorType
    | TupleTypeNode
    | UserDefinedType
    | ValueType
  >;
  nullable: boolean;
  position?: any;
  symbolType: string[];
  withParantheses?: boolean;
  ws?: any[];
}

export interface UserDefinedType extends ASTNode {
  abstract: boolean;
  anonType?: FiniteTypeNode | ObjectType | RecordType;
  attached: boolean;
  client: boolean;
  compensate: boolean;
  constant: boolean;
  deprecated: boolean;
  final: boolean;
  function_final: boolean;
  grouped: boolean;
  interface: boolean;
  isAnonType?: boolean;
  lambda: boolean;
  listener: boolean;
  native: boolean;
  nullable: boolean;
  nullableOperatorAvailable?: boolean;
  optional: boolean;
  packageAlias: Identifier;
  parallel: boolean;
  position: any;
  private: boolean;
  public: boolean;
  readonly: boolean;
  record: boolean;
  remote: boolean;
  required: boolean;
  resource: boolean;
  service: boolean;
  symbolType?: string[];
  testable: boolean;
  typeName: Identifier;
  worker: boolean;
  ws?: any[];
}

export interface ValueType extends ASTNode {
  emptyParantheses?: boolean;
  grouped: boolean;
  nullable: boolean;
  nullableOperatorAvailable?: boolean;
  position?: any;
  symbolType?: string[];
  typeKind: string;
  withParantheses?: boolean;
  ws?: any[];
}

export interface Variable extends ASTNode {
  abstract: boolean;
  annotationAttachments: AnnotationAttachment[];
  arrowExprParam?: boolean;
  attached: boolean;
  client: boolean;
  compensate: boolean;
  constant: boolean;
  defaultable?: boolean;
  deprecated: boolean;
  deprecatedAttachments: any;
  endWithSemicolon?: boolean;
  final: boolean;
  function_final: boolean;
  global?: boolean;
  inObject?: boolean;
  initialExpression?:
    | ArrayLiteralExpr
    | ArrowExpr
    | BinaryExpr
    | BracedTupleExpr
    | CheckExpr
    | ElvisExpr
    | ErrorConstructor
    | FieldBasedAccessExpr
    | IndexBasedAccessExpr
    | Invocation
    | Lambda
    | Literal
    | RecordLiteralExpr
    | SimpleVariableRef
    | StringTemplateLiteral
    | Table
    | TernaryExpr
    | TrapExpr
    | TypeConversionExpr
    | TypeInitExpr
    | TypeTestExpr
    | TypedescExpression
    | UnaryExpr
    | WaitExpr
    | XmlCommentLiteral
    | XmlElementLiteral
    | XmlPiLiteral
    | XmlTextLiteral;
  interface: boolean;
  isAnonType?: boolean;
  lambda: boolean;
  listener: boolean;
  markdownDocumentationAttachment?: MarkdownDocumentation;
  name: Identifier;
  native: boolean;
  noVisibleName?: boolean;
  optional: boolean;
  parallel: boolean;
  position: any;
  private: boolean;
  public: boolean;
  readonly: boolean;
  record: boolean;
  remote: boolean;
  required: boolean;
  resource: boolean;
  rest?: boolean;
  service: boolean;
  symbolType?: string[];
  testable: boolean;
  typeNode?:
    | ArrayType
    | BuiltInRefType
    | ConstrainedType
    | ErrorType
    | FunctionType
    | TupleTypeNode
    | UnionTypeNode
    | UserDefinedType
    | ValueType;
  worker: boolean;
  ws?: any[];
}

export interface VariableDef extends ASTNode {
  defaultable?: boolean;
  position: any;
  variable: TupleVariable | Variable;
  ws: any[];
}

export interface VisibleEndpoint extends ASTNode {
  caller: boolean;
  name: string;
  pkgAlias: string;
  pkgName: string;
  pkgOrgName: string;
}

export interface WaitExpr extends ASTNode {
  expression: SimpleVariableRef;
  isExpression: boolean;
  position: any;
  symbolType: string[];
  ws: any[];
}

export interface Where extends ASTNode {
  expression: BinaryExpr;
  position: any;
  ws: any[];
}

export interface While extends ASTNode {
  body: Block;
  condition: BinaryExpr | BracedTupleExpr;
  position: any;
  ws: any[];
}

export interface WindowClause extends ASTNode {
  functionInvocation: Invocation;
  position: any;
  ws: any[];
}

export interface XmlAttribute extends ASTNode {
  inTemplateLiteral: boolean;
  name: XmlQname;
  position: any;
  symbolType: string[];
  value: XmlQuotedString;
  ws: any[];
}

export interface XmlAttributeAccessExpr extends ASTNode {
  expression: FieldBasedAccessExpr | IndexBasedAccessExpr;
  index: Literal;
  position: any;
  symbolType: string[];
  ws: any[];
}

export interface XmlCommentLiteral extends ASTNode {
  inTemplateLiteral?: boolean;
  isExpression?: boolean;
  position: any;
  symbolType: string[];
  textFragments: Array<BinaryExpr | Literal>;
  ws: any[];
}

export interface XmlElementLiteral extends ASTNode {
  attributes: XmlAttribute[];
  content: Array<
    | Literal
    | SimpleVariableRef
    | XmlCommentLiteral
    | XmlElementLiteral
    | XmlPiLiteral
  >;
  endTagName?: SimpleVariableRef | XmlQname;
  inTemplateLiteral?: boolean;
  isExpression?: boolean;
  namespaces: string;
  position: any;
  root?: boolean;
  startLiteral?: string;
  startTagName: SimpleVariableRef | XmlQname;
  symbolType: string[];
  ws: any[];
}

export interface XmlPiLiteral extends ASTNode {
  dataTextFragments: Literal[];
  inTemplateLiteral?: boolean;
  isExpression?: boolean;
  position: any;
  root?: boolean;
  startLiteral?: string;
  symbolType: string[];
  target: Literal;
  ws?: any[];
}

export interface XmlQname extends ASTNode {
  inTemplateLiteral?: boolean;
  localname: Identifier;
  position: any;
  prefix: Identifier;
  symbolType: string[];
  ws: any[];
}

export interface XmlQuotedString extends ASTNode {
  position: any;
  symbolType: string[];
  textFragments: Literal[];
}

export interface XmlTextLiteral extends ASTNode {
  isExpression: boolean;
  position: any;
  root: boolean;
  startLiteral: string;
  symbolType: string[];
  textFragments: Literal[];
  ws: any[];
}

export interface Xmlns extends ASTNode {
  global?: boolean;
  namespaceDeclaration?: Xmlns;
  namespaceURI?: Literal;
  position: any;
  prefix?: Identifier;
  symbolType?: string[];
  ws?: any[];
}

// tslint:enable:ban-types
