import styled from '../../theme/styled-components';

export const TextInput = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.colors.transparentIvory,
  selectionColor: theme.colors.ivory,
}))(({ theme }) => ({
  width: '100%',
  color: theme.colors.ivory,
}));
