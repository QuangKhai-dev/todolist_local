import { useFormik } from 'formik';
import InputCustom from '../Input/Input';
import SelectCustom from '../Select/Select';
import * as Yup from 'yup';
const FormCreateTask = () => {
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    touched,
    errors,
    setFieldValue,
  } = useFormik({
    initialValues: {
      title: '',
      description: '',
      priority: '',
      tag: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: Yup.object({
      title: Yup.string().required('Vui lòng nhập tên task'),
      description: Yup.string().required('Vui lòng nhập mô tả'),
      priority: Yup.string().required('Vui lòng chọn priority'),
      tag: Yup.string().required('Vui lòng chọn tag'),
    }),
  });
  const showError = (name) => {
    if (touched[name] && errors[name]) {
      return <div className="text-red-500 mt-1 text-xs">{errors[name]}</div>;
    }
    return null;
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-5">
        <InputCustom
          id="title"
          placeHolder="Nhập tên task"
          value={values.title}
          label="Tên task"
          name="title"
          onChange={handleChange}
          onBlur={handleBlur}
          showError={showError('title')}
        />

        <div className="flex justify-between space-x-5">
          <SelectCustom
            value={values.priority}
            styleLayout="w-1/2"
            label="Priority"
            options={[
              { value: '', label: 'Chọn Priority' },
              { value: 'jack', label: 'High' },
              { value: 'lucy', label: 'Low' },
              { value: 'Yiminghe', label: 'Medium' },
              { value: 'disabled', label: 'Critical' },
            ]}
            onChange={(value) => {
              setFieldValue('priority', value);
            }}
            onBlur={handleBlur}
            showError={showError('priority')}
          />

          <SelectCustom
            value={values.tag}
            styleLayout="w-1/2"
            label="Tags"
            options={[
              { value: '', label: 'Chọn Tag' },
              { value: 'jack', label: 'Công việc' },
              { value: 'lucy', label: 'Cá nhân' },
            ]}
            onChange={(value) => {
              setFieldValue('tag', value);
            }}
            onBlur={handleBlur}
            showError={showError('tag')}
          />
        </div>
        <InputCustom
          id="description"
          name="description"
          placeHolder="Nhập mô tả"
          onChange={handleChange}
          onBlur={handleBlur}
          showError={showError('description')}
        />

        <div>
          <button
            type="submit"
            className="px-5 py-2 rounded-md bg-green-600 text-white"
          >
            Tạo task
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormCreateTask;
