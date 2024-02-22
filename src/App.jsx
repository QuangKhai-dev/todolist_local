import { Modal } from 'antd';
import { Tabs } from 'antd';
import { useState } from 'react';
import FormCreateTask from './Components/FormCreateTask/FormCreateTask';
import ListTask from './Components/ListTask/ListTask';
import ListTaskDone from './Components/ListTaskDone/ListTaskDone';
import { useEffect } from 'react';
import { getLocalStorage, saveLocalStorage } from './util/util';
import { Input } from 'antd';

function App() {
  const [arrTask, setArrTask] = useState([]);
  const [filterTask, setFilterTask] = useState([]);
  const [search, setSearch] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleAddTask = (value) => {
    const newArrTask = [...arrTask, value];
    setArrTask(newArrTask);
    saveLocalStorage('arrTask', newArrTask);
  };

  const handleDeleteTask = (key) => {
    const newArrTask = arrTask.filter((task) => task.key !== key);
    setArrTask(newArrTask);
    saveLocalStorage('arrTask', newArrTask);
  };

  const checkTaskDone = (key) => {
    const newTask = arrTask.map((task) => {
      if (task.key === key) {
        return { ...task, status: true };
      }
      return task;
    });
    setArrTask(newTask);
    saveLocalStorage('arrTask', newTask);
  };

  useEffect(() => {
    // lọc từ mảng arrTask ra mảng filterTask
    const newFilterTask = arrTask.filter((task) => {
      console.log(task);
      return task.title.toLowerCase().includes(search.toLowerCase());
    });
    setFilterTask(newFilterTask);
  }, [search, arrTask]);

  useEffect(() => {
    const arrTask = getLocalStorage('arrTask');
    if (arrTask) {
      setArrTask(arrTask);
    }
  }, []);

  const items = [
    {
      key: '1',
      label: (
        <div className="px-20 text-2xl py-2">
          <i className="fa-regular fa-list"></i>
        </div>
      ),
      children: (
        <ListTask
          handleDeleteTask={handleDeleteTask}
          checkTaskDone={checkTaskDone}
          arrTask={filterTask.filter((task) => !task.status)}
        />
      ),
    },
    {
      key: '2',
      label: (
        <div className="px-20 text-2xl py-2">
          <i className="fa-regular fa-clipboard-check"></i>
        </div>
      ),
      children: (
        <ListTaskDone arrTaskDone={filterTask.filter((task) => !task.status)} />
      ),
    },
  ];

  return (
    <>
      <div className="list_task bg-white pt-4 pb-10 rounded-md relative px-5">
        <div>
          <label htmlFor="">Tìm kiếm task</label>
          <Input
            className="mt-2"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            // addonAfter={
            //   <SelectCustom
            //     options={[
            //       { value: 'title', label: 'Title' },
            //       { value: 'tag', label: 'Tag' },
            //       { value: 'priority', label: 'Priority' },
            //     ]}
            //   />
            // }
          />
        </div>
        <Tabs defaultActiveKey="1" items={items} />
        <button
          onClick={showModal}
          className="w-14 h-14 text-white bg-orange-400 rounded-full absolute -bottom-7 left-1/2 -translate-x-1/2"
        >
          <i className="fa-regular fa-plus"></i>
        </button>
      </div>
      <Modal
        title="Tạo task"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <FormCreateTask arrTask={arrTask} handleAddTask={handleAddTask} />
      </Modal>
    </>
  );
}

export default App;
