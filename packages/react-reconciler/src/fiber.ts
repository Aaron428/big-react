import { Props, Key, Ref } from 'shared/ReactTypes';
import { WorkTagType } from './workTags';
import { FlagsType, NoFlags } from './fiberFlags';

export class FiberNode {
	type: any;
	stateNode: any;
	memoizedProps: Props | null;
	pendingProps: Props;
	return: FiberNode | null;
	sibling: FiberNode | null;
	child: FiberNode | null;
	index: number;
	tag: WorkTagType;
	key: Key;
	ref: Ref;

	alternate: FiberNode | null;
	flags: FlagsType;

	constructor(tag: WorkTagType, pendingProps: Props, key: Key) {
		this.tag = tag;
		this.key = key;
		this.stateNode = null;
		this.type = null;
		// return 指向父 FiberNode
		this.return = null;
		this.sibling = null;
		this.child = null;
		// 多个相同结点的下标
		this.index = 0;
		this.ref = null;

		// 工作单元刚开始准备工作时候的 props
		this.pendingProps = pendingProps;
		// 工作完之后的 props
		this.memoizedProps = null;
		this.alternate = null;
		this.flags = NoFlags;
	}
}
