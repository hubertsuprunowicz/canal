import React, { FC } from 'react';
import { OuterModal, InnerModal, Wrapper, CloseButton, Content } from './styles';

type Props = {
    onClose: () => void
}

const Modal: FC<Props> = ({ onClose, children }) => {
    return (
        <OuterModal>
            <InnerModal data-testid="inner-modal">
                <Wrapper>
                    <CloseButton data-testid="modal-close-button" onClick={onClose} outlined>Close</CloseButton>
                </Wrapper>
                <Content>{children}</Content>
            </InnerModal>
        </OuterModal>
    );
}

export default Modal