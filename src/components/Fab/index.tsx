import { Fab as FabButton } from 'react-tiny-fab';
import { Edit } from 'react-feather';
import { useRouter } from '../../hooks';

export function Fab() {
  const { goTo } = useRouter();

  return (
    <FabButton
      icon={<Edit />}
      alwaysShowTitle={true}
      mainButtonStyles={{ backgroundColor: '#1D4ED8' }}
      style={{ bottom: 0, right: 0 }}
      onClick={() => goTo('/new/post')}
    />
  );
}
