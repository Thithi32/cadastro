import React from 'react';
import PropTypes from 'prop-types';

const Confirm = (props) => {
  const { person, edit } = props;
  return (
    <div className="Home">
      <aside>
        { person.avatar &&
          <button href="#" onClick={edit}>
            <img src={URL.createObjectURL(props.person.avatar)} style={{ width: 100, height: 100 }} alt="Avatar" />
          </button>
        }
      </aside>
      <section>
        <p>
          Eu sou o {person.firstName} {person.lastName}
          { person.age &&
            <span>&nbsp;e eu tenho mais de {person.age.substr(0, 2)} anos</span>
          }
          { person.email &&
            <span>&nbsp;e você pode enviar e-mails para {person.email}.</span>
          }
          { person.state &&
            <span>&nbsp;Eu moro no estado do {person.state}.</span>
          }
          { person.insterests &&
            <span>&nbsp;Eu gosto de {person.interests.join(', ')}.</span>
          }
          { person.subscription &&
            <span>&nbsp;Por favor me envie newletters.</span>
          }
          { person.phone &&
            <span>&nbsp;Para me contatar ligue no telefone {person.phone}.</span>
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
  person: PropTypes.shape({
    avatar: PropTypes.shape({}),
  }).isRequired,
};

export default Confirm;
