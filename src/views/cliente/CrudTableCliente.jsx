import React from 'react';
import CrudTableRow from './CrudTableRowCliente';

const CrudTable = ({ data, setDataToEdit, deleteData }) => {
  return (

    <div className='row'>
      <div className="col-12 grid-margin">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">
              <button type="button" className="btn btn-primary btn-sm">Nuevo</button>
            </h4>
            <p className="card-description">
            </p>
            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th className='text-center'> Nombres </th>
                    <th className='text-center'> Apellidos </th>
                    <th className='text-center'> DNI </th>
                    <th className='text-center'> Direccion </th>
                    <th className='text-center'> Email </th>
                    <th className='text-center'> Estado </th>
                    <th className='text-center'> Acciones </th>
                  </tr>
                </thead>
                <tbody>
                  {data.length > 0 ? (
                    data.map(el => (
                      <CrudTableRow
                        key={el.id}
                        el={el}
                        setDataToEdit={setDataToEdit}
                        deleteData={deleteData}
                      />
                    ))
                  ) : (
                    <tr>
                      <td colSpan="3">Sin datos</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    </div>

  );
};

export default CrudTable;