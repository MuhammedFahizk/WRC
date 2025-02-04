import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const Button = ({
  className,
  style,
  animateProps,
  onClick,
  children,
  type = "button", 
  disabled = false, 
}) => {
  const defaultAnimation = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
    transition: { duration: 0.3 },
  };

  return (
    <motion.button
      type={type}
      className={`${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      style={style}
      initial={animateProps?.initial || defaultAnimation.initial}
      animate={animateProps?.animate || defaultAnimation.animate}
      exit={animateProps?.exit || defaultAnimation.exit}
      transition={animateProps?.transition || defaultAnimation.transition}
      onClick={disabled ? null : onClick} 
      disabled={disabled}
    >
      {children}
    </motion.button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  animateProps: PropTypes.shape({
    initial: PropTypes.object,
    animate: PropTypes.object,
    exit: PropTypes.object,
    transition: PropTypes.object,
  }),
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']), 
  disabled: PropTypes.bool, 
};

// Default props
Button.defaultProps = {
  className: '',
  style: {},
  animateProps: {},
  onClick: () => {},
  type: 'button',
  disabled: false,
};

export default Button;
