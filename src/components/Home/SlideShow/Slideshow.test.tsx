
import { act, render, screen, waitFor } from '@testing-library/react';
import React from "react"
import {ReadingImage, BookShelfImage, DataAnalysisImage } from './SlideShowImages/index.js'
import Slideshow from './Slideshow';

beforeEach(() =>{
    jest.useFakeTimers();
  })

afterEach(()=>{
    jest.clearAllTimers();
})

describe('Slideshow images are properly displayed according to time interval', () => {
    
    test('displays the first image at 0 seconds', () => {
        render(<Slideshow/>);
        const slideShowImage = screen.getByRole("img");
        expect(slideShowImage).toHaveAttribute('src',ReadingImage);
    });
    
    test('displays the second image at 3 seconds', () => {
        render(<Slideshow/>);
        act( () =>{
            jest.advanceTimersByTime(3000);
        })
        const slideShowImage = screen.getByRole("img");
        expect(slideShowImage).toHaveAttribute('src',BookShelfImage);
    });
    
    test('displays the third image at 6 seconds', () => {
        render(<Slideshow/>);
        act( () =>{
            jest.advanceTimersByTime(6000);
        })
        const slideShowImage = screen.getByRole("img");
        expect(slideShowImage).toHaveAttribute('src',DataAnalysisImage);
    });
    /*
    test('displays the first image again on the slideshow after 12 seconds', async () => {
        render(<Slideshow/>);
        //jest.clearAllTimers();
        //jest.useFakeTimers();
        act( () =>{
            jest.advanceTimersByTime(12000);
        })
        
        const slideShowImage = screen.getByRole("img");
        await waitFor( () => {
            expect(slideShowImage).toHaveAttribute('src',BookShelfImage);
        })
    });
    */
})        
