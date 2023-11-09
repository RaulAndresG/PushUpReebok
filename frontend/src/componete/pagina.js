import React, { useState, useEffect } from "react";
import "./pagina.css";
import "./modal.css";
import logo from "../img/pngwing.com.png";

const Panel = () => {
  const [data, setData] = useState([]);


  useEffect(() => {
    fetch("http://localhost:7777/get/GetZapatos")
      .then((response) => response.json())
      .then((data) => {
        if (data.result && Array.isArray(data.result)) {
          setData(data.result);
        } else {
          console.error("Los datos no son un array:", data);
        }
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
      });
  }, []);
  
  
  

  return (
    <div className="app">
   <div className="product-info">
  <h1 className="pagina">Reebook</h1>
  <img src={logo} alt="Product" className="product-image" />
</div>

      <div className="tabla-container">
        <table className="tabla">
          <thead>
            <tr></tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr
                key={item._id.$oid}
                className="rectangulo"
                style={{ cursor: "pointer" }}
              >
                <td colSpan={1}>
                  <div className="informacion">
                    <div className="info2">{item.precio}</div>
                    <div className="info2">{item.talla}</div>
                    <div className="informacion">
                      <div className="image-container">
                        <div class="carousel">
                          <ul class="slides">
                            <img
                              src={item.imagen}
                              alt="Product"
                              className="product-image"
                            />
                          </ul>
                        </div>
                        <div className="a">
                          <div className="a">{item.marca}</div>
                          <div className="a1">{`Color: ${item.color}`}</div>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Panel;
