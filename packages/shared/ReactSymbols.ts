const supperSymbol = typeof Symbol === 'function' && Symbol.for;

export const REACT_ELEMENT_TYPE = supperSymbol
	? Symbol.for('react.element')
	: 0xeac7;
