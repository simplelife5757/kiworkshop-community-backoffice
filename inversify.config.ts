import { Container } from "inversify";
import "reflect-metadata";
import { inversifyIds } from 'src/inversify.id'
import NoticeRepository from "src/mother/notice/domain/repository/NoticeRepository"
import NoticeService from "src/mother/notice/domain/service/NoticeService"
import NoticeRepositoryImpl from "src/mother/notice/infrastructure/repository/NoticeRepositoryImpl"
import NoticeServiceImpl from "src/mother/notice/infrastructure/service/NoticeServiceImpl"

const { mother } = inversifyIds;

const inversifyContainer = new Container();

inversifyContainer.bind<NoticeRepository>(mother.notice.NoticeRepository).to(NoticeRepositoryImpl);
inversifyContainer.bind<NoticeService>(mother.notice.NoticeService).to(NoticeServiceImpl);

export { inversifyContainer };