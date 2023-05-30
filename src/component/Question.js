import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, Box } from '@material-ui/core';

function Question({ question, answer, level }) {
    const [showAnswer, setShowAnswer] = useState(false);

    const toggleAnswer = () => {
        setShowAnswer(!showAnswer);
    };

    return (
        <Card style={{ marginBottom: "16px" }}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    {question}
                </Typography>
                <Typography color="textSecondary" style={{ marginTop: "9px" }}>
                    Difficulté: {level}
                </Typography>
                {showAnswer && (
                    <Typography variant="body2" component="p" style={{ marginTop: "9px" }}>
                        Réponse: {answer}
                    </Typography>
                )}
                <Box marginTop={2}>
                    <Button variant="outlined" color="primary" onClick={toggleAnswer}>
                        {showAnswer ? 'Hide Response' : 'Response'}
                    </Button>
                </Box>
            </CardContent>
        </Card>
    );
}

export default Question;