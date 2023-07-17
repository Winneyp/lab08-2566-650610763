import { Header } from "@/components/Header";
import { TaskInput } from "@/components/TaskInput";
import { Task } from "@/components/Task";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    // Main container
    <div className="container mx-auto">
      {/* header section */}
      <Header></Header>
      <TaskInput></TaskInput>
      <Task></Task>
      <Footer></Footer>
    </div>
  );
}
