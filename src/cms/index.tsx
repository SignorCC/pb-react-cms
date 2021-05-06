import {connect} from 'react-redux'

import {toggleMenu} from '@cms/store/cmsActions'

import {AppDispatch, RootState} from '@store/store'

import {CMSMenuContainer as CMSMenu} from './containers/CMSMenu'

interface CMSProps {
  toggleMenu: (state: boolean) => void
}

const CMSComponent: React.FC<CMSProps> = props => {
  return (
    <>
      <CMSMenu />
      {props.children}
      <img
        className="btn btn-dark btn-lg btn-floating cms-edit"
        src="https://avatars.githubusercontent.com/u/55870326?s=200&v=4"
        data-mdb-toggle="popover"
        title="Edit with snek"
        onClick={() => props.toggleMenu(true)}></img>
    </>
  )
}

const mapStateToProps = ({cms}: RootState) => ({
  editable: cms.editingMode
})

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  toggleMenu: (state: boolean) => dispatch(toggleMenu(state))
  //   remove: () => dispatch(decrement)
})

export const CMSWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
)(CMSComponent)