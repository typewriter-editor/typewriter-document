import AttributeMap from './delta/AttributeMap';
import Delta from './delta/Delta';
import Op, { OpIterator } from './delta/Op';
export { AttributeMap, Delta, Op, OpIterator };

export * from './doc/EditorRange';
export * from './doc/deltaToText';

import Line, { LineIterator } from './doc/Line';
import LineOp, { LineOpIterator } from './doc/LineOp';
import TextChange from './doc/TextChange';
import TextDocument from './doc/TextDocument';
export { Line, LineIterator, LineOp, LineOpIterator, TextChange as TextChange, TextDocument as TextDocument };

export { default as cloneDeep } from './util/cloneDeep';
export { default as isEqual } from './util/isEqual';
