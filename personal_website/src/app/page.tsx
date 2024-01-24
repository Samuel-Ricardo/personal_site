//import { Circuit } from '@/components/canvas/circuit/circuit.component';
import { Circuit } from '@/components/canvas/circuit/circuit.component';

export default function Home() {
  return (
    <div className="flex flex-col w-screen h-screen bg-primary">
      <div className="h-[50%]">
        <Circuit></Circuit>
      </div>
      <div className="w-64 h-64 bg-secondary ">{'Hi'}</div>
    </div>
  );
}
