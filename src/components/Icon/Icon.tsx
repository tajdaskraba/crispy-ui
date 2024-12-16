import React from 'react';
import ArrowBack from '../../assets/svg/arrow-back.svg';
import PaperPlane from '../../assets/svg/paper-plane.svg';
import WarningSign from '../../assets/svg/warning-sign.svg';

const createIconComponent = (IconComponent: string) => {
  return ({ size = 16, ...props }) => (
    <IconComponent {...props} />
  );
};

const Icon = {
  ArrowBack: createIconComponent(ArrowBack),
  PaperPlane: createIconComponent(PaperPlane),
  WarningSign: createIconComponent(WarningSign),
};

export default Icon;
