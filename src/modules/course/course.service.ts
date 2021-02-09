import { V2, BASE_URL } from './../../config/routes';
import {
  HttpException,
  HttpService,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
// import { CourseDTO } from './dto/CourseDTO';
import { COURSE } from 'src/config/routes';
import { CourseDTO } from './dto/CourseDTO';

@Injectable()
export class CourseService {
  constructor(private http: HttpService) {}
  async findAll(authorization): Promise<CourseDTO[]> {
    try {
      const { data: course } = await this.http
        .get<CourseDTO[]>(`${BASE_URL}/${V2}/${COURSE}`, {
          headers: {
            authorization,
          },
        })
        .toPromise();

      return course;
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
    // Implementar modulo HTTP que faz uma chamada para a nossa api passando as credenciais!
  }
}
