import {Stack, Grid, Button, TextInput, Box, Center} from '@mantine/core'
import React from 'react'

function ShopChoicePane(){
    const [value, setValue] = React.useState('');


    return (
        <Stack h={500}>
           <Grid>
                <Grid.Col span={3}>
                    <h3>Categories</h3>
                    <Box bg="gray.7" h={150} >
                    List of filerable categories go here
                    </Box>
                </Grid.Col>
                <Grid.Col span={9}>
                    <h3>Items</h3>
                    <Box bg="gray.7" h={150} >
                    Filtered list of items go here
                    </Box>
                </Grid.Col>
                <Grid.Col span={3}>
                    <Box h={100} bg="gray.7">
                    <Grid >
                        <Grid.Col align="center" mb="0" pb="0" span={12}>
                            <Button variant="filled" size="s">Buy</Button>
                        </Grid.Col>
                        <Grid.Col align="center" span={12}>
                            <Button variant="filled" size="s">Add</Button>
                        </Grid.Col>
                    </Grid>
                    </Box>
                </Grid.Col>
                <Grid.Col span={9}>
                    <Box h={100} bg="gray.7">
                    <Grid lh="1" fz="12" >
                        <Grid.Col pb="0" pl="1.25rem" span={6}>
                        Quantity : <input type="number" min="1" max="99" step="1" defaultValue="1"/>
                        <br />
                        Cost : 100 gp
                        </Grid.Col>
                        <Grid.Col align="right" span={6}>
                            <Button fz="10">Total Money: 100gp</Button>
                        </Grid.Col>
                        <Grid.Col span={9}>
                            <Grid>
                                <Grid.Col pl=".25rem"  align="center" mt=".1rem" span={2}>
                                    <p style={{marginLeft : ".75rem"}}>Search: </p>
                                </Grid.Col>
                                <Grid.Col span={9}>
                                <TextInput 
                                value={value}
                                onChange={(event) => setValue(event.currentTarget.value)}
                                />
                                </Grid.Col>
                                <Grid.Col align="right" span={1}>
                                    <Button>Next</Button>
                                </Grid.Col>
                            </Grid>
                        </Grid.Col>
                    </Grid>
                    </Box>
                </Grid.Col>
                        <Grid.Col span={6}>
                            <Box bg="gray.7" h={172} >
                            <h5 align="center">Your Inventory</h5>
                            </Box>
                            <Box bg="gray.7" h={60} >
                            <Grid>
                                <Grid.Col align="center" mb="0" pb= "0"fz=".85rem" lh=".25" span={6}>
                                    Sell at:
                                </Grid.Col>
                                <Grid.Col span={6}>
                                </Grid.Col>
                                <Grid.Col mx=".25rem" span={2}>
                                    <Button variant="filled" size="xs" radius="xl">20%</Button>
                                </Grid.Col>
                                <Grid.Col mx=".25rem" span={2}>
                                    <Button variant="filled" size="xs" radius="xl">50%</Button>
                                </Grid.Col>
                                <Grid.Col  mx=".25rem" span={2}>
                                    <Button variant="filled" size="xs" radius="xl">100%</Button>
                                </Grid.Col>
                                <Grid.Col offset={1.5} span={2}>
                                    <Button variant="filled" size="xs" radius="xl">Delete</Button>
                                </Grid.Col>
                            </Grid>
                            </Box>
                        </Grid.Col>
                        <Grid.Col span={6}>
                            <Box bg="gray.7" h={225}>
                                <h5 align="center">Equipped</h5>
                            <form align="center">
                                <select>
                                    <option value="armor">Armor</option>
                                </select>
                                <br/>
                                <select>
                                    <option value="main-hand">Main Hand</option>
                                </select>
                                <br/>
                                <select>
                                    <option value="off-hand">Off Hand</option>
                                </select>
                                <br/>
                                <select>
                                    <option value="attune-slot-1">Attunement Slot 1</option>
                                </select>
                                <br/>
                                <select>
                                    <option value="attune-slot-2">Attunement Slot 2</option>
                                </select>
                            </form>
                            </Box>
                        </Grid.Col>
           </Grid>
        </Stack>
    )
}

export default ShopChoicePane