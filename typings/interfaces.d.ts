interface IContact{
    name: string;
    email: string;
}

interface ICard{
    id: number;
    title: string;
    description: string;
    color:string;
    status:string;
    tasks: ITask[];
}

interface ITask{
    id:number;
    name:string;
    done: boolean;
}

interface ITaskCallbacks{
    add: (cardId: string, taskName: string) => void;
    delete: (cardId: string, taskId: number, taskIndex: number) => void;
    toggle: (cardId: string, taskId: number, taskIndex: number) => void;
}