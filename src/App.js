import { useState, useEffect } from "react";

function App() {
  const [kategori, setKategori] = useState("Catering");
  const [nilai, setNilai] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("kpiData");
    if (saved) {
      setData(JSON.parse(saved));
    }
  }, []);

  const simpanData = () => {
  if (!nilai) return;

  const newData = [
    ...data,
    {
      kategori,
      nilai,
      tanggal: new Date().toLocaleDateString()
    }
  ];

  setData(newData);
  localStorage.setItem("kpiData", JSON.stringify(newData));
  setNilai("");
};


    setData(newData);
    localStorage.setItem("kpiData", JSON.stringify(newData));
    setNilai("");
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Dashboard KPI</h1>

      <select value={kategori} onChange={(e) => setKategori(e.target.value)}>
        <option>Catering</option>
        <option>Housekeeping</option>
        <option>Pack Meal</option>
      </select>

      <br /><br />

      <input
        type="number"
        placeholder="Nilai KPI"
        value={nilai}
        onChange={(e) => setNilai(e.target.value)}
      />

      <br /><br />

      <button onClick={simpanData}>Simpan</button>

      <hr />

      <h3>Data KPI</h3>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            {item.tanggal} — {item.kategori} — {item.nilai}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
