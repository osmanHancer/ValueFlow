import { IHandler } from '@foblex/mediator';
import { AddNewNodeToFlowRequest } from './add-new-node-to-flow.request';
import { IFlowStorage } from '../../flow.storage';
import { generateGuid } from '@foblex/utils';
import { INodeDataProcess } from '../../node.data';

export class AddNewNodeToFlowHandler implements IHandler<AddNewNodeToFlowRequest> {

  constructor(
    private flow: IFlowStorage
  ) {
  }

  public handle(request: AddNewNodeToFlowRequest): void {
    
    if (request.type === "kare")
      this.flow.nodes.push({
        id: generateGuid(),
        input: generateGuid(),
        output: generateGuid(),
        type: request.type,
        position: request.position,
        data: { name: "Process", cycleTime: 1, dee: 1, wrp: 1, shift1: 1, shift2: 1, shift3: 1, addedValue: 1, max: 1, min: 1, current: 1 ,radiobtn:"0"} as INodeDataProcess
      });
    if (request.type != "kare")
      this.flow.nodes.push({
        id: generateGuid(),
        input: generateGuid(),
        output: generateGuid(),
        type: request.type,
        position: request.position,
        data: { name: "Depo", cycleTime: 1, dee: 1, wrp: 1, shift1: 1, shift2: 1, shift3: 1, addedValue: 1, max: 1, min: 1, current: 1 } as INodeDataProcess
      });

  }
}
