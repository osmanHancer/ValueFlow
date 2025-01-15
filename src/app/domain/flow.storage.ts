import { ENodeType } from './e-node-type';
import { IFlowNodeStorageModel } from './node/i-flow-node-storage-model';
import { IFlowConnectionStorageModel } from './connection/i-flow-connection-storage-model';
import { INodeDataProcess } from './node.data';

export interface IFlowStorage {

  nodes: IFlowNodeStorageModel[];

  connections: IFlowConnectionStorageModel[];
}

export const FLOW_STORAGE: IFlowStorage = {

  nodes: [ {
    id: 'input1',
    output: 'input_output',
    type: ENodeType.kare,
    position: { x: 300, y: 100 },
    data: {name:"Process",cycleTime:1,dee:1,wrp:1,shift1:1,shift2:1,shift3:1,addedValue:1,max:1,min:1,current:1,radiobtn:"0"} as INodeDataProcess
  }],
  connections: [

  ]
};
