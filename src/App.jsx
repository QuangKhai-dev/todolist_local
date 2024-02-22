import { Modal } from 'antd';
import { Tabs } from 'antd';
import { useState } from 'react';
import FormCreateTask from './Components/FormCreateTask/FormCreateTask';
import ListTask from './Components/ListTask/ListTask';
import ListTaskDone from './Components/ListTaskDone/ListTaskDone';

function App() {
  const [arrTask, setArrTask] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const items = [
    {
      key: '1',
      label: (
        <div className="px-20 text-2xl py-2">
          <i className="fa-regular fa-list"></i>
        </div>
      ),
      children: <ListTask />,
    },
    {
      key: '2',
      label: (
        <div className="px-20 text-2xl py-2">
          <i className="fa-regular fa-clipboard-check"></i>
        </div>
      ),
      children: <ListTaskDone />,
    },
  ];
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="list_task bg-white pt-4 pb-10 rounded-md relative px-5">
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
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <FormCreateTask arrTask={arrTask} />
      </Modal>
    </>
  );
}

export default App;
