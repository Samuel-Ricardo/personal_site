import { HorizontalLine } from '@/components/line/horizontal/horizontal.component';
import './conten.style.scss';

export const SimpleCardContent = (props: any) => (
  <div className="content-container">
    <h1 className="card-title">{props.title}</h1>
    <HorizontalLine />
    <p className="content">{props.children}</p>
  </div>
);
