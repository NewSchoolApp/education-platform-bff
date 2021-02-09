import { HttpModule, Module } from '@nestjs/common';
import { CourseService } from './course.service';
import { CourseController } from './course.controller';

@Module({
  imports: [HttpModule],
  controllers: [CourseController],
  providers: [CourseService],
})
export class CourseModule {}
