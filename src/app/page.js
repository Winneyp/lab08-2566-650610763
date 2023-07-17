import { Header } from "@/components/Header";
import { TaskInput } from "@/components/TaskInput";
import { Task } from "@/components/Task";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Header />
      <div style={{ maxWidth: "400px" }} className="mx-auto">
        <TaskInput />
        <Task title="Read a book" />
        <Task title="Take a shower" />
        <Task title="Sleep" />
        <Footer
          year="2023"
          fullname="Tayakorn Aowrattanakul"
          studentId="650610763"
        />
      </div>
    </div>
  );
}
