import { Controller, Get, Headers } from '@nestjs/common';
import { CourseService } from './course.service';
import { CourseDTO } from './dto/CourseDTO';

@Controller('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Get()
  findAll(@Headers() { authorization }): Promise<CourseDTO[]> {
    return this.courseService.findAll(authorization);
  }
}
