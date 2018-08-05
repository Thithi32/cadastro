import React from 'react';
import PropTypes from 'prop-types';

const Confirm = (props) => {
  const { person, edit } = props;
  return (
    <div className="Home">
      <aside>
        { person.avatar &&
          <div>
            <img src={URL.createObjectURL(person.avatar)} style={{ width: 100, height: 100 }} alt="Avatar" />
            <button onClick={edit}>
              Editar perfil
            </button>
            <button onClick={edit}>
              Editar photo
            </button>
          </div>
        }
      </aside>
      <section>
        <p>
          Eu sou o {person.firstName} {person.lastName}
          { person.age &&
            <span>&nbsp;e eu tenho mais de <strong>{person.age.substr(0, 2)}</strong> anos</span>
          }
          { person.email &&
            <span>&nbsp;e você pode enviar e-mails para <strong>{person.email}</strong>.</span>
          }
          { person.state &&
            <span>&nbsp;Eu moro no estado do <strong>{person.state}</strong>.</span>
          }
          { person.insterests &&
            <span>&nbsp;Eu gosto de <strong>{person.interests.join(', ')}</strong>.</span>
          }
          { person.subscription &&
            <span>&nbsp;Por favor me envie newletters.</span>
          }
          { person.phone &&
            <span>&nbsp;Para me contatar ligue no telefone <strong>{person.phone}</strong>.</span>
          }
        </p>
        <button onClick={props.confirm} type="button">
          Confirmar
        </button>
      </section>
    </div>
  );
};

Confirm.propTypes = {
  confirm: PropTypes.func.isRequired,
  edit: PropTypes.func.isRequired,
  person: PropTypes.shape({}).isRequired,
};

export default Confirm;
