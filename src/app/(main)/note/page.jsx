"use client";

import { Card, CardContent } from "@/components/ui/card";
import { addTodo, getTodo, toggleTodo } from "./action";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Suspense, useActionState, useEffect, useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";

const initialState = {
  message: "",
};

const Note = () => {
  const [todos, setTodos] = useState([]);
  const [state, formAction, pending] = useActionState(addTodo, initialState);

  useEffect(() => {
    getTodo().then((data) => {
      setTodos(data);
    });
  }, []);

  return (
    <div className="min-h-screen p-8 bg-gradient-to-b from-black to-[#222] flex items-center justify-center">
      <Card className="w-full max-w-md bg-slate-800 shadow-lg border-0">
        <CardContent className="p-6">
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-slate-100">Tasks</h1>
              </div>
            </div>

            {/* Add Todo Form */}
            <form action={formAction} className="flex gap-2">
              <Input
                type="text"
                id="todo"
                name="todo"
                placeholder="Add a new task..."
                className="flex-1 bg-slate-700 text-slate-100 placeholder-slate-400 border-slate-600 focus:border-sky-400 focus:ring-sky-400"
              />
              <Button
                type="submit"
                size="icon"
                className="bg-sky-500 hover:bg-sky-600 text-white"
                disabled={pending}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </form>

            <Suspense fallback={<p>Loading...</p>}>
              {todos?.map((todo, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-3 p-3 rounded-lg transition-all duration-300 bg-slate-700/30 hover:bg-slate-700/50"
                >
                  <Checkbox
                    checked={todo.completed}
                    onCheckedChange={() => toggleTodo(todo.id)}
                    className="transition-colors border-slate-500"
                  />
                  <span className="flex-1 text-slate-100">{todo.text}</span>
                </div>
              ))}
            </Suspense>

            {/* Empty State */}
            {todos?.length === 0 && (
              <div className="text-center py-6 text-slate-400">Add your first task above ✨</div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Note;
