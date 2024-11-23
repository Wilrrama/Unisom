import { useState, useEffect, ChangeEvent } from "react";
import "./styles.css";
import { IPatientFormData } from "./types";

export const Patient = () => {
  const [formData, setFormData] = useState<IPatientFormData>({
    name: "",
    born: "",
    age: "",
    examDate: "",
    forwardedBy: "",
    audiometer: "AD629",
    lastCalibration: "2023-11-17",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (formData.born) {
      const today = new Date();
      const birthDate = new Date(formData.born);
      const age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      const dayDiff = today.getDate() - birthDate.getDate();

      const calculatedAge =
        monthDiff > 0 || (monthDiff === 0 && dayDiff >= 0) ? age : age - 1;

      setFormData((prevData) => ({
        ...prevData,
        age: calculatedAge.toString(),
      }));
    }
  }, [formData.born]);

  return (
    <div className="patient__container">
      <form>
        <div className="patient__details">
          <label>Nome:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="name__input"
          />

          <label>Data Nascimento:</label>
          <input
            type="date"
            name="born"
            value={formData.born}
            onChange={handleChange}
          />

          <label>Idade:</label>
          <input type="text" name="age" value={formData.age} readOnly />
          <label>anos</label>
        </div>
        <div className="patient__details__exam">
          <label>Data Exame:</label>
          <input
            type="date"
            name="examDate"
            value={formData.examDate}
            onChange={handleChange}
          />

          <label>Encaminhado por:</label>
          <input
            type="text"
            name="forwardedBy"
            value={formData.forwardedBy}
            onChange={handleChange}
            className="input__forwardedBy"
          />
        </div>

        <div className="patient__details__exam_machine">
          <label>Audiômetro:</label>
          <input
            type="text"
            name="audiometer"
            value={formData.audiometer}
            onChange={handleChange}
            className="input__audiometer"
          />

          <label>Última Calibração:</label>
          <input
            type="date"
            name="lastCalibration"
            value={formData.lastCalibration}
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
};
