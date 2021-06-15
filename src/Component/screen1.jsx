import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function ScrollDialog() {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>
      <Button onClick={handleClickOpen('paper')}>scroll=paper</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
          <li>instruction-1<p>Cras mattis consectetur purus sit amet fermentum.</p></li>
          <li>instruction-2<p>Cras mattis consectetur purus sit amet fermentum.</p></li>
           <li>instruction-3<p>Cras mattis consectetur purus sit amet fermentum.</p></li>
            <li>instruction-4<p>Cras mattis consectetur purus sit amet fermentum.</p></li>
             <li>instruction-5<p>Cras mattis consectetur purus sit amet fermentum.</p></li> 
             <li>instruction-6<p>Cras mattis consectetur purus sit amet fermentum.</p></li>
              
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Go Back
          </Button>
          <Button onClick={handleClose} color="primary">
            Start
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
