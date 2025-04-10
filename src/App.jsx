import { useState } from 'react'
import { Container, Grid, Typography, Card, CardContent, CardActionArea, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, Box } from '@mui/material'
import { sequences } from './data/sequences'
import { sequenceBackgrounds } from './assets/sequence-backgrounds'

const App = () => {
  const [selectedSequence, setSelectedSequence] = useState(null)
  const [open, setOpen] = useState(false)

  const handleClickOpen = (sequence) => {
    setSelectedSequence(sequence)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    setSelectedSequence(null)
  }

  if (!sequences || sequences.length === 0) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Chargement des séquences...
        </Typography>
      </Container>
    )
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Séquences Pédagogiques STI2D
      </Typography>
      <Grid container spacing={3}>
        {sequences.map((sequence) => (
          <Grid item xs={12} sm={6} md={4} key={sequence.id}>
            <Card sx={{ height: '100%', position: 'relative', overflow: 'hidden' }}>
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  '& svg': {
                    width: '100%',
                    height: '100%',
                  },
                }}
                dangerouslySetInnerHTML={{ __html: sequenceBackgrounds[sequence.id - 1] }}
              />
              <CardActionArea 
                sx={{ height: '100%' }}
                onClick={() => handleClickOpen(sequence)}
              >
                <CardContent sx={{
                  position: 'relative',
                  zIndex: 1,
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  borderRadius: 1,
                  m: 1,
                }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {sequence.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {sequence.content.cours}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        {selectedSequence && (
          <>
            <DialogTitle>{selectedSequence.title}</DialogTitle>
            <DialogContent>
              <DialogContentText>
                <Typography variant="h6" gutterBottom>Cours</Typography>
                {selectedSequence.content.cours}
                
                <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>Exercices</Typography>
                {selectedSequence.content.exercices}
                
                <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>Étude de cas</Typography>
                {selectedSequence.content.etudeDeCas}
                
                <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>Évaluation formative</Typography>
                {selectedSequence.content.evaluationFormative}
                
                <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>Évaluation sommative</Typography>
                {selectedSequence.content.evaluationSommative}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Fermer</Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Container>
  )
}

export default App