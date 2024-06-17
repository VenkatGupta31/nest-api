import { Injectable, ConsoleLogger } from '@nestjs/common';

@Injectable()
export class MyLoggerService extends ConsoleLogger {
    log(message: any, context?: string) {
        const entry = `${context}\t${message}`

        super.log(message, context)
    }
    error(message: any, stackContext?: string) {
        const entry = `${stackContext}\t${message}`
        super.error(message, stackContext)
    }
}
