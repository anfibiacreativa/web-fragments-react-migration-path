import React, { useEffect, useRef } from 'react';
import styles from '../styles/SloganModal.module.css';

interface SloganModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SloganModal: React.FC<SloganModalProps> = ({ isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  // Close modal with ESC key
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent} ref={modalRef}>
        <button className={styles.modalClose} onClick={onClose}>
          ✕
        </button>
        <div className={styles.modalBody}>
          {/* Using web fragment for the slogan generator */}
          <div style={{ width: '100%', minHeight: '600px' }}>
            {/* @ts-expect-error - web-fragment is a custom element */}
            <web-fragment fragment-id="slogan" src="/generate" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SloganModal;
