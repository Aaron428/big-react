import { FiberNode } from './fiber';

export const beginWork = (fiber: FiberNode): FiberNode | null => {
	// 比较，然后返回子 FiberNode
	return fiber;
};
