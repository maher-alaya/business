import { IsDefined } from 'class-validator';
import { CustomResolver } from '../custom-resolver.type';
import { SmartObjectDto, SysFile } from '@algotech-ce/core';

export class TaskDeleteDocumentDto {
    @IsDefined()
    objectLinked: CustomResolver<SmartObjectDto>;

    @IsDefined()
    documents: CustomResolver<SysFile|SysFile[]>;
}
