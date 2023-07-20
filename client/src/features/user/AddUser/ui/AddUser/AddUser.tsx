import { FC } from 'react'
import { useModalContext } from '../../../../../app/providers/ModalProvider'
import { Button, Modal } from '../../../../../shared/ui'
import cls from './AddUser.module.scss'
import { AddUserForm } from '../AddUserForm/AddUserForm'

export const AddUser: FC = () => {
  const { isActive, handleToggleModal } = useModalContext()

  return (
    <>
      <Button className={cls.button} onClick={handleToggleModal}>
        Добавить пользователя
      </Button>
      <Modal isActive={isActive} toggle={handleToggleModal}>
        <AddUserForm />
        <div className={cls.actions}>
          <button className={cls.create} onClick={handleToggleModal}>
            Добавить
          </button>
          <button className={cls.cancel} onClick={handleToggleModal}>
            Отмена
          </button>
        </div>
      </Modal>
    </>
  )
}
