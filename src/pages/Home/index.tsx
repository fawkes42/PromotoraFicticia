import React, { useRef, useCallback } from 'react';
import {
  Card,
  FirstSection,
  Simulation,
  ThirdSection,
  ArrowDown,
  Button,
  Partners,
} from './style';

import healthInsurance from '../../assets/images/healthInsurance.png';
import bradesco from '../../assets/images/bradesco.png';
import unimed from '../../assets/images/unimed.png';
import amil from '../../assets/images/logo-amil.png';
import sempreSaude from '../../assets/images/sempresaude.png';
import prover from '../../assets/images/prover.png';
import sulAmerica from '../../assets/images/sul-america.png';
import saoCristovao from '../../assets/images/saoCristovao.png';
import santaCasa from '../../assets/images/santaCasa.png';

import partnerHandShake from '../../assets/images/partner.png';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Modal, { ModalHandles } from '../../components/Modal';

const Home: React.FC = () => {
  const modalRef = useRef<ModalHandles>(null);

  const handleOpenModal = useCallback(() => {
    modalRef.current?.openModal();
  }, []);
  return (
    <>
      <FirstSection>
        <Header />
        <ArrowDown>
          <svg className="arrows">
            <path className="a1" d="M0 0 L30 32 L60 0"></path>
            <path className="a2" d="M0 20 L30 52 L60 20"></path>
            <path className="a3" d="M0 40 L30 72 L60 40"></path>
          </svg>
        </ArrowDown>
      </FirstSection>
      <Simulation>
        <p>
          <span className="rowBefore">Faça</span>{' '}
          <span className="rowBefore">uma</span>{' '}
          <span className="rowBefore">simulação</span> agora mesmo e{' '}
          <span className="rowBefore">descubra</span> qual é o{' '}
          <span className="rowBefore">melhor</span>{' '}
          <span className="rowBefore">plano</span> que temos para{' '}
          <span className="rowBefore">você!</span>
          <br />
          <Button onClick={handleOpenModal}>Simular</Button>
        </p>
        <img src={healthInsurance} alt="partner's hand" />
      </Simulation>
      <Modal ref={modalRef} />
      <ThirdSection>
        <div>
          <p id="title">SAÚDE DE QUALIDADE POR UM PREÇO ACESSÍVEL</p>
          <div id="floatingMessage">
            <p>
              Temos como Missão a oferta da excelência na administração de
              benefícios e gestão de saúde, somos movidos pela satisfação e
              qualidade de vida de nossos clientes. Somos Referência na
              administração de benefícios, gestão de saúde, com soluções que
              cabem do bolso do nosso cliente, nos comprometemos com a
              qualidade, agilidade e profissionalismo nos nossos atendimentos.{' '}
              <br />
              <br /> Os Valores que nos sustentam são: EFICIÊNCIA, QUALIDADE,
              AGILIDADE e ECONÔMIA, unidos, esses 4 pilares garantem a
              satisfação tanto do cliente quanto da nossa equipe de
              colaboradores.
            </p>
          </div>
        </div>
      </ThirdSection>
      <Partners>
        <img src={partnerHandShake} alt="partner's hand" />
        <p>
          Trabalhamos com os melhores fornecedores de planos de saúde dispníveis
          no mercado
        </p>
        <div>
          <Card>
            <img src={bradesco} alt="Bradesco" />
          </Card>
          <Card>
            <img src={prover} alt="Prover" />
          </Card>
          <Card>
            <img src={unimed} alt="Unimed" />
          </Card>
          <Card>
            <img src={amil} alt="Amil" />
          </Card>
          <Card>
            <img src={sempreSaude} alt="Sempre Saúde" />
          </Card>
          <Card>
            <img src={sulAmerica} alt="Sul América" />
          </Card>
          <Card>
            <img src={saoCristovao} alt="São Cristóvão" />
          </Card>
          <Card>
            <img src={santaCasa} alt="Santa Casa" />
          </Card>
        </div>
      </Partners>
      <Footer />
    </>
  );
};

export default Home;
